
import ScssFormat from '../ScssFormat';
import * as fs from 'fs';

var str = fs.readFileSync("src/test/test.scss").toString();

var str = new ScssFormat().formatText(str);

fs.writeFileSync("test.format.scss", str);

