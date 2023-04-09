import { getMessage } from '@foundation/core/src';

export default function Page() {
  return (
    <div className="">
        <h2>Hello page: { getMessage('Barney') }</h2>
    </div>
  );
}
