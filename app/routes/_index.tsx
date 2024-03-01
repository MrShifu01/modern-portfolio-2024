import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Christian Stander - Portfolio 2024" },
    { name: "description", content: "This is Christian Stander's Full Stack web Development Portfolio - 2024" },
  ];
};

export default function Index() {
  return (
    <div>

    </div>
  );
}
