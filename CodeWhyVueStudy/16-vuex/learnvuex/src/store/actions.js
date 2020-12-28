export default {
    // aUpdateInfo(context, payload) {
    //     setTimeout(() => {
    //         context.commit('updateInfo')
    //         console.log(payload.message);
    //         payload.success()
    //     }, 1000)
    // }
    aUpdateInfo(context, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(payload);
                resolve('hello world')
            }, 1000)
        })
    }
}