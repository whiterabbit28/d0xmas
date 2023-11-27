import fTelnetOptions from 'ftelnet.js/lib/options';
import fTelnetClient from 'ftelnet.js/lib/client';

export default async (context, inject) => {
  // Create fTelnet options
  const options = new fTelnetOptions({
    BareLFtoCRLF: false,
    BitsPerSecond: 57600,
    ConnectionType: 'telnet',
    Emulation: 'ansi-bbs',
    Enter: '\r',
    Font: 'CP437',
    ForceWss: false,
    Hostname: 'www.google.com',
    LocalEcho: false,
    NegotiateLocalEcho: true,
    Port: 23,
    ScreenColumns: 80,
    ScreenRows: 25,
    SendLocation: true
  });

  // Create fTelnet client
  const fTelnet = new fTelnetClient('fTelnetContainer', options);

  // Connect to fTelnet
  fTelnet.Connect();

  // Inject fTelnet client into Nuxt app
  inject('fTelnet', fTelnet);
};
