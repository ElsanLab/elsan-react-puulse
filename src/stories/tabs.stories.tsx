import type { StoryObj } from "@storybook/react-vite";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta = {
  title: "Components/Tabs",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: function Render() {
    return (
      <Tabs defaultValue="account" className="ep:w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    );
  },
};
