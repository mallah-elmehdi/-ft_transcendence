import * as React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';

// TYPE
type Props = {
    wins: number;
    losses: number;
    draws: number;
};

export const StatusTable = ({ wins, losses, draws }: Props) => {
    return (
        <TableContainer w="100%">
            <Table variant="simple" fontSize="xl">
                <Tbody>
                    <Tr>
                        <Td>Total Games</Td>
                        <Td isNumeric>{wins + losses + draws}</Td>
                    </Tr>
                    <Tr>
                        <Td>Wins</Td>
                        <Td isNumeric color="primary">
                            {wins}
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Losses</Td>
                        <Td isNumeric color="secondary">
                            {losses}
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Draws</Td>
                        <Td isNumeric>{draws}</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Win rate</Th>
                        <Th isNumeric>{Math.round((wins / (wins + losses + draws)) * 100)}%</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
};
