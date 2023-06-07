module.exports = {
  apps: [
    {
      name: 'HubertusPfraundorf',
      port: '13000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}