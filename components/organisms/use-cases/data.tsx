export type UseCaseData = {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export const dataUseCases: UseCaseData[] = [
  {
    title: 'Faster applications and frontends',
    description:
      'Accelerate and co-locate datasets with applications and frontends, to serve more concurrent queries and users with faster page loads and data updates',
    buttonText: 'Try the CQRS sample app',
    buttonLink:
      'https://github.com/spiceai/samples/tree/trunk/acceleration#local-materialization-and-acceleration-cqrs-sample'
  },
  {
    title: 'Faster dashboards, analytics, and BI',
    description: 'Faster, more responsive dashboards without massive compute costs.',
    buttonText: 'Watch the Apache Superset demo',
    buttonLink: 'https://github.com/spiceai/samples/blob/trunk/sales-bi/README.md'
  },
  {
    title: 'Faster data pipelines, ML training and inferencing',
    description:
      'Co-locate datasets in pipelines where the data is needed to minimize data-movement and improve query performance.',
    buttonText: 'Predict hard drive failure with the SMART data demo',
    buttonLink: 'https://github.com/spiceai/demos/tree/trunk/smart-demo#spiceai-smart-demo'
  },
  {
    title: 'Easily query many data sources',
    description:
      'Federated SQL query across databases, data warehouses, and data lakes using Data Connectors.',
    buttonText: 'Data Connectors',
    buttonLink: 'https://docs.spiceai.org/data-connectors'
  }
]
