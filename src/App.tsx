import { Container } from "./components/ui/Container";
import { Section } from "./components/ui/Section";
import { Heading } from "./components/ui/Heading";
import { Text } from "./components/ui/Text";
import { Button } from "./components/ui/Button";
import { Badge } from "./components/ui/Badge";
import { Card } from "./components/ui/Card";

function App() {
  return (
    <>
      {/* Hero Section */}
      <Section id="hero">
        <Container>
          <Heading level={1}>
            🚀 Gayathri Portfolio
          </Heading>

          <Text>
            Building a production-grade Software Engineering Portfolio with
            modern frontend and backend technologies.
          </Text>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>Download Resume</Button>

            <Button variant="secondary">
              GitHub
            </Button>

            <Button variant="ghost">
              Contact
            </Button>
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <Container>
          <Heading level={2}>
            Software Engineering Skills
          </Heading>

          <Text variant="muted">
            Technologies I use to build scalable software systems.
          </Text>

          <div className="mt-6 flex flex-wrap gap-3">
            <Badge>React</Badge>

            <Badge variant="secondary">
              TypeScript
            </Badge>

            <Badge variant="success">
              Node.js
            </Badge>

            <Badge variant="warning">
              MongoDB
            </Badge>

            <Badge variant="danger">
              Express.js
            </Badge>
          </div>
        </Container>
      </Section>
      <Section id="project">
  <Container>
    <Heading level={2}>
      Featured Project
    </Heading>

    <Card className="mt-6 p-6">
      <Heading level={3}>
        AskSky
      </Heading>

      <Text variant="muted">
        Enterprise Weather Platform built with
        React, TypeScript, Node.js,
        Express and MongoDB.
      </Text>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>React</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="success">Node.js</Badge>
      </div>

      <div className="mt-6 flex gap-3">
        <Button>Live Demo</Button>

        <Button variant="secondary">
          GitHub
        </Button>
      </div>
    </Card>
  </Container>
</Section>
    </>
  );
}

export default App;
