<template>
    <div className="FooterSectComBlock wow bounceInUp">
        <ContactsBlock />
        <!-- <p>или</p> -->
        <!-- <Button :text="text"></Button> -->
    </div>
</template>

<script>
    import ContactsBlock from '../ContactsBlock.vue';
    import Button from '../Button.vue'

    export default {
        components: { ContactsBlock, Button },
        data() {
            return {
                text: 'Отправить заявку',
            }
        },
    }
</script>

<style scoped>
    .FooterSectComBlock{
        border-left: 3px solid #5EFFFF;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        width: max-content;
        gap: 10px;
    }
    p{
        color: #5EFFFF;
        transform: translateX(100px);
    }
</style>