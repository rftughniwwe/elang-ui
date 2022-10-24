import {ExtractPropTypes} from 'vue'

export const ButtonType = ['default','primary','success','warning','danger']
export const ButtonSize = ['large','normal','small','mini']

export const buttonProps = {
    type:{
        type:String,
        values:ButtonType
    }
}

export type buttonProps = ExtractPropTypes<typeof buttonProps>