import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Code,
  OrderedList,
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
        As of now, only a few commands are supported such as
        <OrderedList>
          <ListItem><Code>exit</Code> command terminates the shell</ListItem>
          <ListItem><Code>Control + C</Code> terminates the shell.</ListItem>
          <ListItem><Code>echo</Code> builtin prints its arguments</ListItem>
          <ListItem><Code>type</Code> builtin is used to determine how a command would be interpreted if it were used.</ListItem>
          <ListItem><Code>pwd</Code> builtin prints the full, absolute path of the current working directory</ListItem>
          <ListItem><Code>cd</Code> builtin is used to change the current working directory - Implementation in Progress</ListItem>
        </OrderedList>


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
