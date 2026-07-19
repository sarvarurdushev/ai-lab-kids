import { Shell } from "@/components/layout/Shell";
import { isAgeTrack } from "@/lib/soloCurriculum";
import { SequenceBuilder } from "@/components/games/SequenceBuilder";

export default async function SequenceBuilderPage({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const { track: trackParam } = await searchParams;
  const track = isAgeTrack(trackParam) ? trackParam : "little_sparks";

  return (
    <Shell>
      <SequenceBuilder track={track} />
    </Shell>
  );
}
