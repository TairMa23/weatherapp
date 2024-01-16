import { HStack } from '@chakra-ui/react'

import SearchInput from './SearchInput'
import ColorModeSwitch from './ColorModeSwitch'
interface Props {
    onSearch: (searchPlace: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack justifyContent={'space-between'} padding={10}>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar