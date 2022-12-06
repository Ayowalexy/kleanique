import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Text,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function SideMenu({ show, setShow }) {
    const btnRef = React.useRef()
    const navigate = useNavigate();

    return (
        <>
            <Drawer
                size='full'
                isOpen={show}
                placement='left'
                onClose={() => setShow(!show)}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody padding='106px 33px'>
                        <Box>
                            <Text
                                fontWeight={300}
                                color='#364A66'
                                fontFamily='Poppins'
                                fontSize='16px'
                                paddingBottom='22px'
                            >Home</Text>
                            <Accordion allowMultiple>
                                <AccordionItem  border='none' marginLeft='-18px'>
                                    <h2>
                                        <AccordionButton border='none'>
                                            <Box flex='1' textAlign='left'>
                                                <Text
                                                    fontWeight={300}
                                                    color='#364A66'
                                                    fontFamily='Poppins'
                                                    fontSize='16px'
                                                    paddingBottom='22px'
                                                >Services</Text>
                                            </Box>
                                            <AccordionIcon marginTop='-30px' />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Box paddingLeft='25px'>
                                            <Text
                                                onClick={() => navigate('/domestic')}
                                                fontWeight={300}
                                                color='#364A66'
                                                fontFamily='Poppins'
                                                fontSize='16px'
                                                paddingBottom='22px'
                                            >Domestic Service</Text>
                                            <Text
                                            onClick={() => navigate('/commercial')}
                                                fontWeight={300}
                                                color='#364A66'
                                                fontFamily='Poppins'
                                                fontSize='16px'
                                                paddingBottom='22px'
                                            >Commercial Service</Text>
                                        </Box>

                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Text
                                fontWeight={300}
                                color='#364A66'
                                fontFamily='Poppins'
                                fontSize='16px'
                                paddingBottom='22px'
                            >Projects Done</Text>
                            <Text
                                fontWeight={300}
                                color='#364A66'
                                fontFamily='Poppins'
                                fontSize='16px'
                                paddingBottom='22px'
                            >Contact Us</Text>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideMenu