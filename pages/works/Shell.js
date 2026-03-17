import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Text,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout>
    <Container>
      <Title>
        Shell <Badge></Badge>
      </Title>
      <Text>
        A POSIX compliant shell (in the near future) capable of interpreting
        shell commands, running external programs and builtin commands like cd, pwd, echo and more.
        <br></br>
        <br></br>
        Current Features <br></br> <br></br>
        The shell starts with a prompt ($) that signals it’s ready for your command.
        As of now, only a few commands are supported.

      </Text>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/vineeth-au/macos-shell">
            Shell
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
