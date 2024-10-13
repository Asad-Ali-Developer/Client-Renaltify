import { Card, Flex, useColorModeValue, Text, Box } from "@chakra-ui/react";
import { Tenant } from "../hooks/useAllTenants";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

import { useState } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import TenantShowModal from "./TenantShowModal";
import TenantDeleteBox from "./TenantDeleteBox";

interface Props {
    tenants: Tenant[];
}

const TenantsShow = ({ tenants }: Props) => {

    const [activeTenantId, setActiveTenantId] = useState<string | null>(null)

    return (
        <>
            {tenants.map((tenant) => (
                <Card
                    display='flex'
                    key={tenant._id}
                    overflow='hidden'
                    flexDirection='row'
                    borderLeft='5px solid'
                    borderLeftColor='green'
                    px={{ base: 3, lg: 5 }}
                    py={{ base: 4, lg: 5 }}
                    justifyContent='space-between'
                    fontSize={{ base: 14, lg: 16 }}
                    gap={{ base: 2, sm: 0, lg: 0 }}
                    bg={useColorModeValue('white', '')}
                    borderColor={tenant.isActive
                        ? useColorModeValue('green.300', 'green.500')
                        : useColorModeValue('red.300', 'red.500')}>

                    <Flex
                        alignItems='center'
                        gap={{ base: 1, sm: 12, lg: 14 }}
                        justifyContent={{ base: 'space-evenly', md: 'space-between' }}>

                        <Flex
                            gap={2}
                            alignItems='center'
                            w={{ base: '80px', sm: '60px', lg: '90px' }}>
                            <FaUser size='1em' />
                            <Text fontWeight='semibold'>{tenant.tenantName}</Text>
                        </Flex>

                        <Flex
                            gap={2}
                            alignItems='center'>
                            <FaPhoneAlt size={14} />
                            <Text fontWeight='semibold'>{`0${tenant.phone}`}</Text>
                        </Flex>


                    </Flex>

                    <Flex gap={1} alignItems='center' justifyContent='center'>

                        <Flex gap={{ base: 3, lg: 5 }}>

                            <Box
                                cursor='pointer' className="rounded-full flex justify-center items-center">
                                <FiEdit size='1em' />

                            </Box>

                            <Box
                                onClick={() => setActiveTenantId(tenant._id)}
                                className="rounded-full cursor-pointer flex justify-center items-center">

                                <RiDeleteBinLine size='1em' />
                                <TenantDeleteBox
                                    isOpen={true}
                                    onClose={() => setActiveTenantId(null)}
                                    tenantId={activeTenantId === tenant._id
                                        ? tenant._id
                                        : ''} />
                            </Box>

                            <Box
                                onClick={() => setActiveTenantId(tenant._id)}
                                className="rounded-full cursor-pointer flex justify-center items-center">

                                <TenantShowModal
                                    isOpen={true}
                                    tenantId={activeTenantId === tenant._id ? tenant._id : ''}
                                    onClose={() => setActiveTenantId(null)} />

                            </Box>
                        </Flex>
                    </Flex>
                </Card>


            ))}
        </>
    );
}

export default TenantsShow;
