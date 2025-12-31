import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  AtomInput,
} from "@atoms";

const meta = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormExample = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  return (
    <Form {...form}>
      <form className="w-[400px] space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <AtomInput placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription
                title="Email"
                description="We'll never share your email with anyone else."
                formDescriptionId="email-description"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <AtomInput
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormDescription
                title="Password"
                description="Must be at least 8 characters long."
                formDescriptionId="password-description"
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const FormControlExampleComponent = () => {
  const form = useForm();
  return (
    <Form {...form}>
      <div className="w-[400px] space-y-4">
        <FormField
          control={form.control}
          name="example"
          render={() => (
            <FormItem>
              <FormLabel>Form Control</FormLabel>
              <FormControl>
                <AtomInput placeholder="This is a form control" />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </Form>
  );
};

const FormMessageExampleComponent = () => {
  const form = useForm();
  return (
    <Form {...form}>
      <div className="w-[400px]">
        <FormField
          control={form.control}
          name="example"
          render={() => (
            <FormItem className="pb-[20px]">
              <FormLabel>Field with Error</FormLabel>
              <FormControl>
                <AtomInput placeholder="Input field" />
              </FormControl>
              <FormMessage>This field is required</FormMessage>
            </FormItem>
          )}
        />
      </div>
    </Form>
  );
};

export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => <FormExample />,
};

export const FormControlExample: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => <FormControlExampleComponent />,
};

export const FormDescriptionExample: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => (
    <div className="w-[400px]">
      <FormDescription
        title="Description Title"
        description="This is a detailed description that helps users understand what this field is for."
        formDescriptionId="description-id"
      />
    </div>
  ),
};

export const FormMessageExample: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: {} as any,
  render: () => <FormMessageExampleComponent />,
};
