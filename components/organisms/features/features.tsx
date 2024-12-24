import { Title } from 'components/atoms/title/title'
import { Feature } from 'components/molecules/feature/feature'

export const Features = () => {
  return (
    <section className='mx-auto mt-20 px-6 md:max-w-[843px] md:px-0'>
      <Title className='mb-14'>
        Spice is a portable, open-source runtime for fast, last-mile SQL query and AI inference.
      </Title>

      <div className='flex flex-col gap-6 md:flex-row'>
        <div className='flex w-full flex-col gap-6 md:w-1/2'>
          <Feature
            title='Federated Data Access'
            description='Query structured and unstructed data using SQL across databases, data warehouses, and data lakes.'
            docsLink='https://docs.spiceai.org/features/federated-queries'
          />
          <Feature
            title='Self-Hostable and Open-Source'
            description='Self-hostable binary or Docker image, platform-agnostic, and Apache 2.0 licensed. Built on industry standard technologies including Apache DataFusion and Apache Arrow.'
          />
        </div>
        <div className='flex w-full flex-col gap-6 md:w-1/2 md:pt-20'>
          <Feature
            title='Data Acceleration'
            description='Materialize data and content in DuckDB, SQLite, and PostgreSQL; in-memory or on disk. Results caching included.'
            docsLink='https://docs.spiceai.org/features/local-acceleration'
          />
          <Feature
            title='Secure AI/ML Gateway'
            description='Load-balance across local models and OpenAI compatible endpoints with full observability, metrics, telemetry, query/task history, data flows, and tracing.'
            docsLink='https://docs.spiceai.org/features/large-language-models'
          />
        </div>
      </div>
    </section>
  )
}
