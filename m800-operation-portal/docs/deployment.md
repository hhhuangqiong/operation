# Deployment

After running the `build` task, all necessary files will present under `/dist/`.
To start the server, set up the environment and start the built `server.js` with node.

```
dist $> node server.js
```

## Configuration

### Environment variables

| Variable | Description | Mandatory |
| --- | --- | --- |
| PSO_SERVER_URL | The network location (`host:port`) of the Platform State Observer. | true |
| PORT | The port which this server is listening to. Defaults to `3000`. | false |
