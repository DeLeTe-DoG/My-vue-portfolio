<template>
    <div className="contactsBlock">
        <p>Вы можете связаться со мной:</p>
        <div className="widgets">
            <div v-for="el in urls" :key="el.id">
                <a :href="el.href"><img className="widget" :src="el.src"></a>
            </div>
        </div>
    </div>
</template>

<script>
import phone from '../images/icons/PhoneIcon.png'
import tg from '../images/icons/TelegramIcon.png'
import vk from '../images/icons/VkIcon.png'
import whatsapp from '../images/icons/WhatsappIcon.png'

export default {
    data() {
        return {
        urls: [
        {
        id: 1,
        href: "tel:+79869268733",
        src: phone,
        },
        {
        id: 2,
        href: "https://t.me/delete_dog",
        src: tg,
        },
        {
        id: 3,
        href: "https://vk.com/monky__d__luffy",
        src: vk,
        },
        {
        id: 4,
        href: "https://wa.me/79869268733",
        src: whatsapp,
        },
        ]
        }
}
}
</script>

<style scoped>
    p{
        margin-bottom: 10px;
    }
    .contatsBlock{
        display: flex;
        flex-direction: column;
        /* gap: 0px; */
    }
    .widgets{
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    .widget{
        width: 40px;    
    }

    @media (max-width: 1000px) {
    .widget{width: 35px;}
}
@media (max-width: 750px) {
    .widget{width: 30px;}
}
@media (max-width:550px) {
    .widgets{gap: 15px}
    .widget{width: 20px;}
}
</style>