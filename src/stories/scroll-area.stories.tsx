import { ScrollArea, ScrollBar } from "@/components/scroll-area";
import { Separator } from "@/components/separator";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fragment } from "react";

interface StoryArgs {
  //
}

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  argTypes: {},
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<StoryArgs>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Default: Story = {
  args: {},
  render: function Render(args) {
    return (
      <ScrollArea className="ep:h-72 ep:w-48 ep:rounded-md ep:border">
        <div className="ep:p-4">
          <h4 className="ep:mb-4 ep:text-sm ep:leading-none ep:font-medium">
            Tags
          </h4>
          {tags.map((tag) => (
            <Fragment key={tag}>
              <div className="ep:text-sm">{tag}</div>
              <Separator className="ep:my-2" />
            </Fragment>
          ))}
        </div>
      </ScrollArea>
    );
  },
};

interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export const HorizontalScrolling: Story = {
  args: {},
  render: function Render(args) {
    return (
      <ScrollArea className="ep:w-96 ep:rounded-md ep:border ep:whitespace-nowrap">
        <div className="ep:flex ep:w-max ep:space-x-4 ep:p-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="ep:shrink-0">
              <div className="ep:overflow-hidden ep:rounded-md">
                <img
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="ep:aspect-[3/4] ep:h-fit ep:w-fit ep:object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="ep:text-muted-foreground ep:pt-2 ep:text-xs">
                Photo by{" "}
                <span className="ep:text-foreground ep:font-semibold">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  },
};
