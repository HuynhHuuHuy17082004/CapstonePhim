import { Popover as PopoverA , PopoverProps as PopoverPropsA } from "antd"
type PopoverProps = PopoverPropsA
export const PopOver = (props: PopoverProps) => {
  return (
    <PopoverA {...props} />
  )
}
