<script lang="ts">
    import type { IMediaContainer } from "../../../engine/providers/MediaPlugin";
    import { viewerMode } from "../utils/storage";
    import WideViewerSetting from "./WideViewerSetting.svelte";
    import WebtoonViewer from "./WebtoonViewer.svelte";
    import MangaViewer from "./MangaViewer.svelte";

    export let item: IMediaContainer;
    export let throttlingDelay: number;
    export let toggleThumbnailViewer: () => void;
    export let currentImageIndex: number;

    let imagePadding = 2;
    const title = item?.Parent?.Title ?? "unkown";
</script>

<div class={$viewerMode}>
    <WideViewerSetting {title} {toggleThumbnailViewer} />
    {#if $viewerMode === "webtoon"}
        <WebtoonViewer {item} {throttlingDelay} {imagePadding} />
    {:else if $viewerMode === "manga"}
        <MangaViewer
            {item}
            {currentImageIndex}
            {throttlingDelay}
            {imagePadding}
        />
    {/if}
</div>

<style>
    div {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        overflow-y: scroll;
        z-index: 9000;
        background-color: var(--cds-ui-01);
    }

    .manga {
        display: flex;
        align-items: center;
    }
</style>
