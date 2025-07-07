import { Link } from "react-router-dom";

export function Artist({ name, country, nickname }) {
  return (
    <div>
      <div class="artist relative border-b-[1px] border-b-text py-xs before:absolute before:-left-8 before:top-1/2 before:hidden before:size-5 before:-translate-y-1/2 before:rounded-full before:bg-text hover:before:block lg:py-md before:scale-[1.1]">
        <div class="relative flex items-center justify-between">
          <Link class="grow" to={`/artist/${nickname}`}>
            <h3 class="grow items-start gap-xs text-3xl lg:text-5xl">
              <span
                data-sentry-component="StampText"
                data-sentry-source-file="StampText.tsx"
              >
                <span class="inline-flex flex-wrap">
                  <span class="inline whitespace-nowrap">{name}</span>
                </span>
              </span>
              <span class="align-super text-sm"> ({country})</span>
            </h3>
          </Link>
          <div class="flex flex-col items-end">
            <div
              class="w-full"
              data-sentry-component="EmbedPlayer"
              data-sentry-source-file="Embed.tsx"
            >
              <div class="visually-hidden">
                <div
                  class="react-player"
                  data-sentry-element="ReactPlayer"
                  data-sentry-source-file="Embed.tsx"
                  style={{ width: "100%;", height: "100%;" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
