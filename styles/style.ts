import { bash, dependencies } from "../scripts/lib/utils";
import { styles } from "../variables";

const variables = styles.map(({ name, value }) => `$${name}: ${value};`);

async function resetCss() {
  if (!dependencies("sass", "fd")) return;

  try {
    const vars = `${TMP}/variables.scss`;
    const scss = `${TMP}/main.scss`;
    const css = `${TMP}/main.css`;

    const fd = await bash(`fd ".scss" ${App.configDir}`);
    const files = fd.split(/\s+/);
    const imports = [vars, ...files].map((f) => `@import '${f}';`);

    await Utils.writeFile(variables.join("\n"), vars);
    await Utils.writeFile(imports.join("\n"), scss);
    await bash`sass ${scss} ${css}`;
    App.applyCss(css, true);
  } catch (error) {
    error instanceof Error ? logError(error) : console.error(error);
  }
}

Utils.monitorFile(`${App.configDir}/styles`, resetCss);
await resetCss();
