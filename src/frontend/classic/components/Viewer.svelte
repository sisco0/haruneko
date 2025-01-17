<script lang="ts">
    import type { IMediaContainer } from "../../../engine/providers/MediaPlugin";
    import ThumbnailViewer from "./ThumbnailViewer.svelte";
    import WideViewer from "./WideViewer.svelte";
    import VideoViewer from "./VideoViewer.svelte";

    type Mode = "Thumbnail" | "Wide" | "Video";

    export let item: IMediaContainer;
    export let mode: Mode = "Thumbnail";
    let currentImageIndex: number = 0;
    let throttlingDelay = 1000;

    let update: Promise<void> | undefined;
    $: update = item?.Update();

    function toggleThumbnailViewer() {
        mode = "Thumbnail";
    }
    function toggleWideViewer(imageIndex: number) {
        currentImageIndex = imageIndex;
        mode = "Wide";
    }
</script>

<div id="Viewer">
    <div id="Contents" class={mode}>
        {#await update}
            <p>...loading items</p>
        {:then}
            {#if mode === "Thumbnail"}
                <ThumbnailViewer {item} {throttlingDelay} {toggleWideViewer} />
            {:else if mode === "Wide"}
                <WideViewer
                    {item}
                    {currentImageIndex}
                    {throttlingDelay}
                    {toggleThumbnailViewer}
                />
            {:else if mode === "Video"}
                <VideoViewer />
            {:else}
                Unknown mode requested
            {/if}
        {:catch error}
            <p class="error">Unable to load item : {error}</p>
        {/await}
    </div>
</div>

<style>
    #Viewer {
        width: 100%;
        height: 100%;
        padding: 0.5em;
        background-image: none;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left top;
        user-select: none;
        grid-area: Content;
    }
    .error {
        color: red;
    }
</style>
