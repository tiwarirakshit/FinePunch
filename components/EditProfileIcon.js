import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const EditProfileIcon = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.4} style={{backgroundColor: '#FFFFFF', borderRadius: 20, padding: 4}}>
            <Svg style={{ height: 23, width: 23 }} viewBox="-1 0 24 26" xmlns="http://www.w3.org/2000/svg" >
                <Path
                    fill="#000"
                    fillRule="evenodd"
                    d="M20.75 20.44a.75.75 0 0 1 0 1.5h-7.253a.75.75 0 0 1 0-1.5h7.253ZM16.116 3.654l1.723 1.339c.608.362 1.083 1.009 1.263 1.775a2.862 2.862 0 0 1-.383 2.222l-.007.01c-.068.09-.362.462-1.847 2.322a.749.749 0 0 1-.128.16l-.321.402-.228.286-1.69 2.115-.34.426-5.01 6.269a2.447 2.447 0 0 1-1.886.914l-3.639.046h-.01a.75.75 0 0 1-.73-.577l-.819-3.471a2.371 2.371 0 0 1 .46-2.037l9.42-11.782c.004-.004.007-.01.011-.013 1.033-1.235 2.901-1.417 4.161-.406Zm-5.222 4.133-7.199 9.005a.879.879 0 0 0-.17.755l.68 2.885 3.04-.038a.949.949 0 0 0 .732-.352l3.235-4.048.417-.521.417-.523 3.11-3.891-4.262-3.272Zm2.216-2.77-1.279 1.598 4.26 3.27c.82-1.026 1.36-1.703 1.41-1.767a1.36 1.36 0 0 0 .142-1.004 1.411 1.411 0 0 0-.652-.887 328.898 328.898 0 0 1-1.808-1.398 1.497 1.497 0 0 0-2.073.188Z"
                />
            </Svg>
        </TouchableOpacity>
    )
}

export default EditProfileIcon