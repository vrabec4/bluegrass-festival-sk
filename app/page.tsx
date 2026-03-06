import { FestivalPage } from '@/components/festival-page';
import { getCurrentEdition } from '@/lib/festival';

export default function HomePage() {
  const edition = getCurrentEdition();
  return <FestivalPage edition={edition} />;
}
