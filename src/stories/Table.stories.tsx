import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  AtomText,
} from "@atoms";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "600px" }}>
      <Table>
        <TableCaption>
          <AtomText>A list of recent transactions</AtomText>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <AtomText variant="table_header">Date</AtomText>
            </TableHead>
            <TableHead>
              <AtomText variant="table_header">Amount</AtomText>
            </TableHead>
            <TableHead>
              <AtomText variant="table_header">Status</AtomText>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <AtomText variant="table_data">2024-01-15</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">$100.00</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">Completed</AtomText>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <AtomText variant="table_data">2024-01-14</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">$250.00</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">Pending</AtomText>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <AtomText variant="table_data">2024-01-13</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">$75.50</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">Completed</AtomText>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <div style={{ width: "600px" }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <AtomText variant="table_header">Product</AtomText>
            </TableHead>
            <TableHead>
              <AtomText variant="table_header">Quantity</AtomText>
            </TableHead>
            <TableHead>
              <AtomText variant="table_header">Price</AtomText>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <AtomText variant="table_data">Item 1</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">2</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">$50.00</AtomText>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <AtomText variant="table_data">Item 2</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">1</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">$30.00</AtomText>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>
              <AtomText variant="table_header">Total</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">$130.00</AtomText>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};

export const Simple: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <AtomText variant="table_header">Name</AtomText>
            </TableHead>
            <TableHead>
              <AtomText variant="table_header">Value</AtomText>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <AtomText variant="table_data">Item A</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">100</AtomText>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <AtomText variant="table_data">Item B</AtomText>
            </TableCell>
            <TableCell>
              <AtomText variant="table_data">200</AtomText>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const ManyRows: Story = {
  render: () => (
    <div style={{ width: "600px" }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <AtomText variant="table_header">ID</AtomText>
            </TableHead>
            <TableHead>
              <AtomText variant="table_header">Name</AtomText>
            </TableHead>
            <TableHead>
              <AtomText variant="table_header">Status</AtomText>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }, (_, i) => (
            <TableRow key={i}>
              <TableCell>
                <AtomText variant="table_data">{i + 1}</AtomText>
              </TableCell>
              <TableCell>
                <AtomText variant="table_data">Item {i + 1}</AtomText>
              </TableCell>
              <TableCell>
                <AtomText variant="table_data">
                  {i % 2 === 0 ? "Active" : "Inactive"}
                </AtomText>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};
