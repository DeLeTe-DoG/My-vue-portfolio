<template>
    <div className="modal hiddenModal">
            <button @click="closeModal()" class="closeModalBtn">
                X
            </button>
            <form>
                <label for="name">
                    Как вас зовут?
               
                    <input 
                     id="name" 
                     type="text" 
                     v-model="userName" 
                     placeholder="введите ФИО"
                    >
                </label>

                <label for="name">
                    Как я могу с вами связаться?
                
                    <input
                     id="contacts"
                     type="text" 
                     v-model="userContacts" 
                     placeholder="Телефон / почта / ссылка на соцсеть"
                    >
                </label>
                
                <label>Комментарий к отклику:
                    <textarea v-model="userText"></textarea>
                </label>
                <button disabled className="sendMessageBtn">Отправить</button>
                <p className="noticement">Данный функционал находится в доработке!</p>
            </form>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                userName: '',
                userContacts: '',
                userText: '',
            }
        },
        props: {
            closeModal: {
                type: Function,
                required: true,
            }
        },
    }
</script>

<style scoped>
    .hiddenModal{
        display: none !important;
    }
    .modal{
        width: 100%;
        height: 100vh;
        z-index: 10;
        position: absolute;
        display: flex;
        align-items: center;
        background-color: #cdcccc84;
    }
    form{
        padding: 20px;
        border-radius: 8px;
        background-color: #7a90b5eb;
        width: max-content;
        height: max-content;
        margin: 0 auto;
        vertical-align: middle;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 400px;
    }
    label{
        display: flex;
        flex-direction: column;
        gap:5px;
        color: #000;
    }
    input{
        height: 30px;
        width: auto;
        border: none;
        border-radius: 5px;
    }
    input::placeholder{
        color: hsla(0, 0%, 0%, 0.6);
        font-size: 15px;
        letter-spacing: 0.05em;
        padding-left: 10px;
    }
    textarea{
        color: #000;
        font-size: 15px;
        letter-spacing: 0.05em;
        border: none;
        border-radius: 5px;
        /* width: 400px; */
        resize: vertical;
    }
    .closeModalBtn{
        position: absolute;
        top: 50px;
        right: 50px;
        font-size: 20px;
        height: 35px;
        width: 35px;
        border: 2px solid black;
        border-radius: 50%;
        background: transparent;
        transition: all 0.1s ease-in;
    }
    .closeModalBtn:hover{
        background-color: rgb(206, 20, 32);
        scale: 1.1;
        cursor: pointer;
    }
    .sendMessageBtn{
        margin: 20px auto 0 auto;
        font-size: 20px;
        height: 30px;
        width: 200px;
        border: none;
        border-radius: 5px;
        background: #fff;
        transition: all 0.1s ease-in;
    }
</style>