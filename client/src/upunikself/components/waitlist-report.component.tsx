import React from "react";
import {
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spacer,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { CSVLink } from "react-csv";

import { PageFooterComponent } from "./page-footer.component";
import { useGetWaitListQuery } from "../api";
import dayjs from "dayjs";
import { PageHeaderComponent } from "./page-header.component";

interface WaitlistReportComponentProps {}

export const WaitlistReportComponent: React.FC<
  WaitlistReportComponentProps
> = () => {
  const waitListResult = useGetWaitListQuery({});

  const reportName = `waitlist-report-${dayjs().format("DD-MM-YYYY")}.csv`;

  return (
    <Stack>
      <PageHeaderComponent />
      <Stack direction={"row"} mt="4">
        <Stack width={["1%", "30%", "30%"]}></Stack>
        <Stack width={["98%", "40%", "40%"]}>
          <Stack direction={{ base: "column", xl: "row" }} maxW="max-content">
            <Spacer />
            {waitListResult.data ? (
              <CSVLink
                data={waitListResult.data.waitList.map((waitList) => ({
                  email: waitList.email,
                  "subscribed on": dayjs(waitList.createdAt).format(
                    "DD MMM YYYY, hh:mm:A"
                  ),
                }))}
                filename={reportName}
                className="btn btn-primary"
                target="_blank"
              >
                <Button width={"fit-content"} colorScheme="blue">
                  Export CSV
                </Button>
              </CSVLink>
            ) : undefined}
          </Stack>
          <Heading textAlign={"center"}>Subscription List</Heading>
          {!waitListResult.isFetching ? (
            <TableContainer>
              <Table variant="simple" size={["sm", "md", "md"]}>
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th width={"100%"}>Email</Th>
                    <Th>Subscribe On</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {waitListResult.data &&
                    waitListResult.data.waitList.map((waitList, index) => (
                      <Tr key={index}>
                        <Td>{index + 1}</Td>
                        <Td>{waitList.email}</Td>
                        <Td>
                          {dayjs(waitList.createdAt).format(
                            "DD MMM YYYY, hh:mm:A"
                          )}
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <Center pt="10">
              <Spinner />
            </Center>
          )}
        </Stack>
        <Stack width={["1%", "30%", "30%"]}></Stack>
      </Stack>
      <PageFooterComponent />
    </Stack>
  );
};
