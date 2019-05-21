<template>
    <button :disabled="disabled" class="at-button"
        @click="handleClick"
        :autofocus="autofocus"
        :type="nativeType"
        :class="[
            type ? 'at-button--' + type : '',
            size ? 'at-button--' + size : '',
            atimg ? 'at-img-' + atimg : '',
            atprimaryImg ? 'at-primaryImg-' + atprimaryImg : '',
            {
            'is-disabled': disabled,
            'is-loading': loading,
            'is-plain': plain
            }
        ]"
    >
    <i class="at-icon-loading" v-if="loading" @click="handleInnerClick"></i>
    <i :class="'at-icon-' + icon" v-if="icon && !loading" @click="handleInnerClick"></i>
    <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
    </button>
</template>
<script>
    export default {
        name:'at-button',
        componentName: "ElButton",
        props: {
            type: {
                type: String,
                default: 'default'
            },
                size: String,
            icon: {
                type: String,
                default: ''
            },
            atimg:{
                type: String,
                default: ''
            },
            atprimaryImg:{
                type: String,
                default: ''
            },
            nativeType: {
                type: String,
                default: 'button'
            },
            loading: Boolean,
            disabled: Boolean,
            plain: Boolean,
            autofocus: Boolean
        },

        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            },
            handleInnerClick(evt) {
                if (this.disabled) {
                    evt.stopPropagation();
                }
            }
        }
    };
</script>