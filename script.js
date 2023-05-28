document.querySelector('.sign').addEventListener("click",function(){
    document.querySelector('.malumot').style.display = 'block'

    let fir_name = document.querySelector('.fir_name')
    let las_name = document.querySelector('.las_name')
    let phone = document.querySelector('.phone')
    let email = document.querySelector('.email')
    let password = document.querySelector('.password')
    let confirm = document.querySelector('.confirm')

    if(password.value == confirm.value){

   

    let new_tr = document.createElement('tr')
    document.querySelector('table').appendChild(new_tr)
    new_tr.className += 'newtr'

    let id = document.createElement('td')
    id.innerHTML = 1
    document.querySelector('.newtr').appendChild(id)

    let name1 = document.createElement('td')
    name1.innerHTML = fir_name.value
    document.querySelector('.newtr').appendChild(name1)

    let name2 = document.createElement('td')
    name2.innerHTML = las_name.value
    document.querySelector('.newtr').appendChild(name2)

    let name3 = document.createElement('td')
    name3.innerHTML = phone.value
    document.querySelector('.newtr').appendChild(name3)

    let name4 = document.createElement('td')
    name4.innerHTML = email.value
    document.querySelector('.newtr').appendChild(name4)

    let name5 = document.createElement('td')
    name5.innerHTML = password.value
    document.querySelector('.newtr').appendChild(name5)

    let name6 = document.createElement('td')
    name6.innerHTML = confirm.value
    document.querySelector('.newtr').appendChild(name6)

}
else{
    let error = document.createElement('a')
    error.innerHTML = 'Parolni tasdiqlang!'
    document.querySelector('.malumot').appendChild(error)
}
})