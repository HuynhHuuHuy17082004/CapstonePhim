import {Button as ButtonA , ButtonProps as ButtonPropsA} from 'antd'

type ButtonProps = ButtonPropsA &{
    //Định nghĩa thêm props của mình 
}
export const Button = (props : ButtonProps) => {
  return (
    <ButtonA  {...props} />
  )
}
