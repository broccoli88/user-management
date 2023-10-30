import { defineStore } from "pinia";
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'
import { ref, unref, computed } from "vue";

export const useFormStore = defineStore('formStore', () => {

    const router = useRouter()
    const currentForm = ref('SigninForm')
    const isModalOpen = ref(false)


    const modalError = ref({
        signIn: {
            error: false,
            message: ''
        },
        signUp: {
            error: false,
            message: ''
        },
        update: {
            error: false,
            message: ''
        },
        signOut: {
            error: false,
            message: ''
        },
    })

    const inputData = ref({
        username: {
            id: 'username',
            placeholder: 'Your username',
            label: 'Username'
        },
        password: {
            id: 'password',
            placeholder: 'Your password',
            label: 'Password'
        },
        email: {
            id: 'email',
            placeholder: 'Your email',
            label: 'Email'
        },
        fullName: {
            id: 'full-name',
            placeholder: 'Your full name',
            label: 'Full Name'
        },
    })



    const modalErrorMessage = computed(() => {
        return Object.values(modalError.value).filter(msg => {
            if (msg.error) return msg
        })
    })

    const goTo = (form) => currentForm.value = unref(form)

    // Modal

    const setModalWhenError = (errorOccurance, errorMsg) => {
        setDefaultModalErrorMessages()
        modalError.value[errorOccurance].error = true
        displayModalErrorMessage(errorMsg)
        openModal()
    }

    const displayModalErrorMessage = (msg) => {
        Object.keys(modalError.value).forEach(key => {
            if (modalError.value[key].error) {
                modalError.value[key].message = msg
            }
        })
    }

    const setDefaultModalErrorMessages = () => {
        Object.keys(modalError.value).forEach(key => {
            modalError.value[key].error = false
        })
    }

    const openModal = () => isModalOpen.value = true

    const closeModal = () => {
        setDefaultModalErrorMessages()
        isModalOpen.value = false
    }

    // Form
    const user = ref(null)
    const authUser = ref(null)

    const signinData = ref({
        email: '',
        password: ''
    })

    const signupData = ref({
        username: '',
        full_name: '',
        email: '',
        pwd: '',
    })

    const clearSignInData = () => {
        signinData.value.email = ''
        signinData.value.password = ''
    }

    const clearSignUpData = () => {
        signupData.value.email = ''
        signupData.value.password = ''
        signupData.value.fullName = ''
        signupData.value.username = ''
    }

    const signUp = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: signupData.value.email,
            password: signupData.value.pwd
        })

        if (error) {
            console.log(error.message)
            return
        }
        console.log('auth: ', data)
    }


    const signIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: signinData.value.email,
            password: signinData.value.password
        })

        if (error) {
            console.log(error.message)
            return
        }

        authUser.value = data.user
        router.push({ name: 'user-dashboard' })
    }

    // Update

    const isUpdateFormVisible = ref(false)

    const updateUsersData = async () => {
        const { data, error } = await supabase
            .from('users')
            .insert(
                { 'username': signupData.value.username, 'full_name': signupData.value.full_name, 'email': signupData.value.email, 'pwd': signupData.value.pwd },

            )
            .select()

        if (error) {
            console.log(error.message)
            return
        }

        console.log('table: ', data)
    }




    return {
        currentForm,
        inputData,
        signinData,
        signupData,
        isModalOpen,
        modalError,
        modalErrorMessage,
        user,
        goTo,
        openModal,
        closeModal,
        displayModalErrorMessage,
        setDefaultModalErrorMessages,
        clearSignUpData,
        clearSignInData,
        signUp,
        signIn,
        isUpdateFormVisible,
        authUser
    }
})