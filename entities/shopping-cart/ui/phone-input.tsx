import {useChangePhoneNumberCart, useShoppingCart} from "@/entities/shopping-cart/model/hooks";
import 'react-phone-number-input/style.css';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import {Control, Controller} from "react-hook-form";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const PhoneInput = ({ control }: {control: Control<{ phone: string, products: null }, any, { phone: string,products: null }>}) => {
    const phone = useShoppingCart().phone;
    const changePhone = useChangePhoneNumberCart();

    return (
        <Controller
            name="phone"
            control={control}
            rules={{
                required: "Поле обязательно!",
                validate: (value: string) => {
                    const digits = value.replace(/\D/g, "");

                    if (digits.length < 11) return "Минимум 11 цифр!";
                    if (digits.length > 12) return "Максимум 12 цифр!";
                    return true;
                }
            }}
            render={({ field, fieldState }) => {
                return (
                    <div className="flex flex-col justify-center">
                        <PhoneInputWithCountry
                            {...field}
                            control={control}
                            value={phone ?? ""}
                            onChange={(val: string) => {
                                field.onChange(val);
                                changePhone(val);
                            }}
                        />
                        {fieldState.error && (
                            <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                        )}
                    </div>
                );
            }}
        />
    )
}

export default PhoneInput;
