import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
  SheetBody,
} from "@/components/sheet";

import { Button } from "@/components/button";

interface StoryArgs {
  size: "tight" | "mid" | "full";
  title: string;
  description: string;
  body: string;
  footer: boolean;
}

const meta = {
  component: Sheet,
  title: "Dialogs/Sheet",
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  argTypes: {
    size: {
      description: "Width of the sheet.",
      control: { type: "radio" },
      options: ["tight", "mid", "full"],
    },
    title: {
      description: "Change or remove the sheet's title",
      control: { type: "text" },
    },
    description: {
      description: "Change or remove the sheet's description",
      control: { type: "text" },
    },
    body: {
      description: "Change or remove the sheet's body",
      control: { type: "text" },
    },
    footer: {
      description: "Add or remove the sheet's footer",
      control: { type: "boolean" },
    },
  },
  args: {
    size: "tight",
    title: "Are you absolutely sure?",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin condimentum condimentum. Nunc sed sapien ultrices turpis aliquam gravida. Nullam vel finibus sem, vel rutrum nunc. Aliquam non purus quam. In hac habitasse platea dictumst. Duis massa tortor, vulputate a ex ac, fermentum dapibus orci. Aenean id nibh nibh. Integer eu lectus ac dui finibus convallis. Aliquam at ligula porta, tempor sem et, aliquet turpis. Curabitur eget nisl a lectus molestie ultricies a ut erat. Ut id risus eu nibh efficitur vestibulum. Quisque pellentesque diam fermentum, ullamcorper nisi eget, vulputate tellus. Ut elementum elementum scelerisque.

Cras bibendum sollicitudin porttitor. Sed bibendum mauris sed justo maximus mollis ac in ante. Fusce consequat, velit quis pellentesque blandit, turpis nisl finibus dolor, quis tincidunt leo diam ac felis. Nullam porta pellentesque dolor, sed efficitur libero ultricies a. Aenean tincidunt lacinia fringilla. Maecenas lacinia erat dui, eget iaculis ligula commodo sed. Suspendisse in ultricies eros, et hendrerit sapien. Mauris eget eros diam. Vestibulum rutrum dignissim consectetur. Curabitur cursus ante luctus mauris commodo, ac bibendum lacus sodales. Praesent molestie tincidunt blandit. Ut felis est, sollicitudin eget consequat vel, hendrerit non ipsum. Fusce quis turpis dolor. Cras sagittis augue sed ex gravida vehicula. Morbi tristique dolor ut sollicitudin tempus.

Sed ex velit, blandit nec imperdiet et, mollis ac arcu. Vivamus sodales convallis ex non efficitur. Mauris vitae dictum nisi. Nunc leo augue, hendrerit id consectetur ut, mollis finibus dolor. Quisque aliquam laoreet eleifend. Duis convallis vehicula felis pretium hendrerit. Phasellus lacus elit, convallis ut enim a, imperdiet porta nisl. In egestas, massa vitae varius elementum, risus tellus pharetra justo, a sodales nunc arcu sed urna. Sed magna quam, eleifend mattis pretium sed, scelerisque non justo. Fusce luctus risus id mauris tempor, quis lobortis dui sollicitudin. Nunc finibus nisi eu ultrices blandit. Nam euismod commodo massa eu cursus. Donec id volutpat justo, et maximus augue. Morbi volutpat ligula velit. Vestibulum id vestibulum urna. Etiam elementum massa sed nulla posuere, a scelerisque leo tincidunt.

Proin dolor augue, varius non congue vel, lobortis vel risus. Nullam est mauris, blandit eu nulla ac, bibendum efficitur elit. Vestibulum massa est, ultrices vel maximus convallis, pulvinar quis lacus. Cras egestas mattis velit quis dapibus. Mauris sit amet tempus neque. Nunc pretium purus urna, in vehicula magna pretium quis. Morbi congue euismod eros, ac aliquam orci aliquet non. Duis pretium justo in viverra semper.

Vivamus est libero, pellentesque non mattis eget, vulputate vel nibh. Aliquam et risus ac quam aliquet ornare vel sit amet purus. Aliquam lacinia faucibus arcu id dignissim. Maecenas tortor mi, imperdiet quis orci eu, interdum bibendum erat. Morbi facilisis tellus accumsan ultrices porta. Suspendisse risus erat, tempor et vulputate eu, iaculis eu diam. Aenean tristique dapibus nibh a cursus. Sed eget dapibus turpis. Fusce scelerisque et elit id finibus. Sed at orci rhoncus, porta erat in, elementum lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec aliquet convallis molestie.`,
    footer: true,
  },
  render: function Render(args) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open sheet</Button>
        </SheetTrigger>
        <SheetContent size={args.size}>
          <SheetHeader>
            {args.title && <SheetTitle>{args.title}</SheetTitle>}
            {args.description && (
              <SheetDescription>{args.description}</SheetDescription>
            )}
          </SheetHeader>
          {args.body && <SheetBody>{args.body}</SheetBody>}
          {args.footer && (
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="primary">Close</Button>
              </SheetClose>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    );
  },
};
