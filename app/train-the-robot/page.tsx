import { Shell } from "@/components/layout/Shell";
import { isAgeTrack } from "@/lib/curriculum";
import { TrainTheRobot } from "@/components/games/TrainTheRobot";

export default async function TrainTheRobotPage({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const { track: trackParam } = await searchParams;
  const track = isAgeTrack(trackParam) ? trackParam : "little_sparks";

  return (
    <Shell>
      <TrainTheRobot track={track} />
    </Shell>
  );
}
