import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import jsonp from '../public/images/works/JsonParser-Image1.png'
import iconShell from '../public/images/works/terminal.png'

const Works = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="JsonParser" title="Json Parser" thumbnail={jsonp}>
            A convenience library that makes it easier to retrieve values from
            JSON.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="Shell" title="Shell" thumbnail={iconShell}>
            A POSIX compliant shell (in the near future) capable of interpreting shell commands,
            running external programs and builtin commands like cd, pwd, echo and more.
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
