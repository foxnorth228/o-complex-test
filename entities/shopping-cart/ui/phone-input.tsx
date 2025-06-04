import {useChangePhoneNumberCart, useShoppingCart} from "@/entities/shopping-cart/model/hooks";
import 'react-phone-number-input/style.css';
import PhoneInputLib from 'react-phone-number-input'

const PhoneInput = () => {
    const phone = useShoppingCart().phone;
    const changePhone = useChangePhoneNumberCart();

    return (
        <PhoneInputLib
            initialValueFormat="national"
            value={phone ?? ''}
            onChange={changePhone}/>
    )
}

export default PhoneInput;
