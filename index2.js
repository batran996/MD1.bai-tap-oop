class Remote {
    onOff(tv) {
        tv.setStatus(!tv.getStatus())
    }

    chanelReset(tv, chanel) {
        if (tv1.getStatus()) {
            tv.setChanel(chanel)
        }else {
            console.log("hay bat len tv !")
        }
    }
    volumeReset(tv){
        if (tv.getStatus()){
            tv.setVolume(tv.getVolume()+1)
        }
    }
}