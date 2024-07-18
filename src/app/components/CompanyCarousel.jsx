import React from 'react'

const CompanyCarousel = () => {
    return (
        <div>
            <main class="relative flex flex-col justify-center overflow-hidden">
                <div class=" w-[80vw] mx-auto px-4 md:px-6 py-16">
                    <div class="text-center">
                        <div
                            x-data="{}"
                            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                            class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                        >
                            <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                                <li>
                                   12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                   12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                   12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                   12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                                <li>
                                12
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    )
}

export default CompanyCarousel