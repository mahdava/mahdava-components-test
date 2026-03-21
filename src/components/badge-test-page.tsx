"use client";

import { Badge, Card, MahdavaUIProvider, Typography } from "@mahdava/ui";

export const BadgeTestPage = () => {
  return (
    <MahdavaUIProvider>
      <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16">
        <div className="grid w-full gap-8">
          <header className="grid gap-3">
            <Typography component="p" variant="label">Mahdava components test</Typography>
            <Typography component="h1" variant="headingXl">Single-purpose repo to test `@mahdava/ui` rendering in Next.js</Typography>
            <Typography component="p" variant="body">
              If the package styling pipeline is healthy, the badges below should look styled instead of flat HTML soup.
            </Typography>
          </header>

          <Card title="Badge rendering test" description="Using the published @mahdava/ui package in a fresh Next.js app.">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
            </div>
          </Card>
        </div>
      </main>
    </MahdavaUIProvider>
  );
};
