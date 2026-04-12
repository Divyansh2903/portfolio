import type { ComponentType, SVGProps } from 'react';
import CppIcon from '../assets/icons/cpp.svg?react';
import DartIcon from '../assets/icons/dart.svg?react';
import ExpressIcon from '../assets/icons/express.svg?react';
import FirebaseIcon from '../assets/icons/fireabse.svg?react';
import FlutterIcon from '../assets/icons/flutter.svg?react';
import JsIcon from '../assets/icons/js.svg?react';
import MongoIcon from '../assets/icons/mongo.svg?react';
import NextIcon from '../assets/icons/next.svg?react';
import NodeJsIcon from '../assets/icons/nodejs.svg?react';
import PostgresIcon from '../assets/icons/postgres.svg?react';
import PrismaIcon from '../assets/icons/prisma.svg?react';
import PythonIcon from '../assets/icons/python.svg?react';
import ReactIcon from '../assets/icons/react.svg?react';
import ReactNativeIcon from '../assets/icons/react-native.svg?react';
import TsIcon from '../assets/icons/ts.svg?react';
import { SectionHeader } from './SectionHeader';

type SvgrIcon = ComponentType<SVGProps<SVGSVGElement>>;

type Pill = { label: string; Icon: SvgrIcon };

const languagePills: Pill[] = [
  { label: 'TypeScript', Icon: TsIcon },
  { label: 'JavaScript', Icon: JsIcon },
  { label: 'Python', Icon: PythonIcon },
  { label: 'Dart', Icon: DartIcon },
  { label: 'C++', Icon: CppIcon },
];

const frameworkPills: Pill[] = [
  { label: 'Flutter', Icon: FlutterIcon },
  { label: 'React', Icon: ReactIcon },
  { label: 'Next.js', Icon: NextIcon },
  { label: 'React Native', Icon: ReactNativeIcon },
  { label: 'Node.js', Icon: NodeJsIcon },
  { label: 'Express', Icon: ExpressIcon },
];

const databasePills: Pill[] = [
  { label: 'PostgreSQL', Icon: PostgresIcon },
  { label: 'Prisma', Icon: PrismaIcon },
  { label: 'Firebase', Icon: FirebaseIcon },
  { label: 'MongoDB', Icon: MongoIcon },
];

function PillItem({ label, Icon }: Pill) {
  const Svg = Icon;
  return (
    <li>
      <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-700">
        <Svg className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {label}
      </span>
    </li>
  );
}

export function TechStack() {
  return (
    <section aria-labelledby="stack-heading">
      <SectionHeader title="Stack" />
      <h2 id="stack-heading" className="sr-only">
        Stack
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Languages
          </h3>
          <ul className="flex flex-wrap gap-2">
            {languagePills.map((pill) => (
              <PillItem key={pill.label} {...pill} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Frameworks &amp; libraries
          </h3>
          <ul className="flex flex-wrap gap-2">
            {frameworkPills.map((pill) => (
              <PillItem key={pill.label} {...pill} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Databases &amp; tools
          </h3>
          <ul className="flex flex-wrap gap-2">
            {databasePills.map((pill) => (
              <PillItem key={pill.label} {...pill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
