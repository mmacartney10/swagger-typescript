declare module "polka" {
  interface PolkaInstance {
    use(path: string, handler: any): PolkaInstance;
    use(handler: any): PolkaInstance;
    get(path: string, handler: (req: any, res: any) => void): PolkaInstance;
    post(path: string, handler: (req: any, res: any) => void): PolkaInstance;
    put(path: string, handler: (req: any, res: any) => void): PolkaInstance;
    delete(path: string, handler: (req: any, res: any) => void): PolkaInstance;
    listen(port: number, callback?: (err?: Error) => void): PolkaInstance;
  }

  function polka(): PolkaInstance;
  export = polka;
}
