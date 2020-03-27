import * as axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "ef077242-5039-4d29-9155-e3c59332bdf1"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    getFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}


export const dialogsAPI = {
    startDialog(id) {
        return instance.put(`dialogs/${id}`)
            .then(response => {
                return response.data
            })
    },
    getDialogs() {
        return instance.get(`dialogs`)
            .then(response => {
                return response.data
            })
    },
    getMessages(id) {
        return instance.get(`dialogs/${id}/messages`)
            .then(response => {
                return response.data
            })
    },
    sendMessage(id, body) {
        return instance.post(`dialogs/${id}/messages`, { body })
            .then(response => {
                return response.data
            })
    },
    deleteMessage(id) {
        return instance.delete(`dialogs/messages/${id}`)
            .then(response => {
                return response.data
            })
    }
}