import { readFileSync, writeFileSync } from 'fs';

const raw = readFileSync(
  'C:/Users/USER/.cursor/projects/empty-window/agent-tools/1280fa6d-6466-4255-8619-7815da655b2b.txt',
  'utf8'
);
const repos = JSON.parse(raw);

const webKeywords = /mern|express|react|javascript|handlebars|ecommerce|weather|web|html|css|node/i;
const embeddedKeywords = /esp32|stm32|uart|iot|embedded|firmware|rndis|pppos|bare|gpio|spi|i2c|raspberry|arduino|libopencm3|cellular|mqtt|bluetooth|ble|wifi|qualcomm|realtek|keypad|lcd|c\/c/i;

const embedded = repos.filter((r) => {
  const text = `${r.name} ${r.description || ''} ${r.language || ''}`;
  if (webKeywords.test(text) && !embeddedKeywords.test(text)) return false;
  return embeddedKeywords.test(text) || ['C', 'C++', 'Python', 'Makefile', 'Assembly'].includes(r.language);
});

writeFileSync(
  'C:/Users/USER/Projects/atul-sharma-portfolio/src/data/github-repos.json',
  JSON.stringify(
    embedded.map((r) => ({
      name: r.name,
      description: r.description || 'Embedded systems research & firmware development',
      language: r.language || 'C',
      url: r.html_url,
      updated: r.updated_at,
      stars: r.stargazers_count,
    })),
    null,
    2
  )
);

console.log(`Found ${embedded.length} embedded repos`);
