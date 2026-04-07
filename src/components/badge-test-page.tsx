"use client";

import {
  Avatar,
  Badge,
  Card,
  Checkbox,
  FormField,
  Input,
  MahdavaUIProvider,
  RadioGroup,
  Select,
  Switch,
  Typography,
} from "@mahdava/ui";

export const BadgeTestPage = () => {
  return (
    <MahdavaUIProvider>
      <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16">
        <div className="grid w-full gap-8">
          <header className="grid gap-3">
            <Typography component="p" variant="label">
              Mahdava components test
            </Typography>
            <Typography component="h1" variant="heading-lg">
              Single-purpose repo to test `@mahdava/ui` rendering in Next.js
            </Typography>
            <Typography component="p" variant="body">
              If the package styling pipeline is healthy, the badges below
              should look styled instead of flat HTML soup.
            </Typography>
          </header>

          <Card
            title="Badge rendering test"
            description="Using the published @mahdava/ui package in a fresh Next.js app."
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
            </div>
          </Card>
          <Card>
            <FormField
              label="FormField component test"
              hint="The input below should be styled and not look like a plain HTML input."
            >
              <Input placeholder="Input component test" />
            </FormField>
          </Card>
          <Card>
            <RadioGroup
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <Checkbox label="Checkbox component test" />
          </Card>
          <Card>
            <Avatar fallback="Lusse Musse" size="xl" />
            <Switch label="Switch component test" />
            <Select
              options={[
                {
                  label: "Design",
                  value: "design",
                },
                {
                  label: "Engineering",
                  value: "engineering",
                },
                {
                  label: "Marketing",
                  value: "marketing",
                },
              ]}
            />
          </Card>
        </div>
      </main>
    </MahdavaUIProvider>
  );
};
