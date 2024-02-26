import Components from "../../components";
import * as Icons from "@radix-ui/react-icons";

const Page = () => {
    return (
        <div className="w-full min-h-screen flex justify-center gap-10 px-10">
            <div className="w-2/3 px-8 flex flex-col gap-10 items-center">

                <Components.Icon icon="Icons.AccessibilityIcon"/>

                <Components.Title title="UIKit" heading="H1"/>

                <div className="w-full">
                    <Components.Title title="Títulos" heading="H2"/>
                    <div className="
                        flex
                        flex-col
                        w-full 
                        rounded-2xl
                        gap-4
                        py-10
                    ">
                        <Components.Title title="Heading 1" heading="H1"/>
                        <Components.Title title="Heading 2" heading="H2"/>
                        <Components.Title title="Heading 3" heading="H3"/>
                        <Components.Title title="Heading 4" heading="H4"/>
                        <Components.Title title="Heading 5" heading="H5"/>
                        <Components.Title title="Heading 6" heading="H6"/>
                    </div>
                </div>
                
                <div className="w-full">
                    <Components.Title title="Botões" heading="H2"/>
                    <div className="
                        flex
                        flex-col
                        w-full 
                        rounded-2xl 
                        gap-4
                        py-10
                    ">
                        <div className="flex gap-4">
                            <div>
                                <Components.Button label="Primary" size="xs" color="primary" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Primary" size="sm" color="primary" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Primary" size="md" color="primary" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Primary" size="lg" color="primary" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Primary" size="xl" color="primary" variant="filled"/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Components.Button label="Secondary" size="xs" color="secondary" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Secondary" size="sm" color="secondary" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Secondary" size="md" color="secondary" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Secondary" size="lg" color="secondary" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Secondary" size="xl" color="secondary" variant="filled"/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Components.Button label="Danger" size="xs" color="danger" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Danger" size="sm" color="danger" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Danger" size="md" color="danger" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Danger" size="lg" color="danger" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Danger" size="xl" color="danger" variant="filled"/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Components.Button label="Neutral" size="xs" color="neutral" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Neutral" size="sm" color="neutral" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Neutral" size="md" color="neutral" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Neutral" size="lg" color="neutral" variant="filled"/>
                            </div>
                            <div>
                                <Components.Button label="Neutral" size="xl" color="neutral" variant="filled"/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Components.Title heading="H4" title="Variações (outlined)"/>
                            <div>
                                <Components.Button label="Primary" size="md" color="primary" variant="outlined"/>
                            </div>
                            <div>
                                <Components.Button label="Secondary" size="md" color="secondary" variant="outlined"/>
                            </div>
                            <div>
                                <Components.Button label="Danger" size="md" color="danger" variant="outlined"/>
                            </div>
                            <div>
                                <Components.Button label="Neutral" size="md" color="neutral" variant="outlined"/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Components.Title heading="H4" title="Variações (ghost)"/>
                            <div>
                                <Components.Button label="Primary" size="md" color="primary" variant="outlined"/>
                            </div>
                            <div>
                                <Components.Button label="Secondary" size="md" color="secondary" variant="outlined"/>
                            </div>
                            <div>
                                <Components.Button label="Danger" size="md" color="danger" variant="outlined"/>
                            </div>
                            <div>
                                <Components.Button label="Neutral" size="md" color="neutral" variant="outlined"/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Components.Button label="Primary" size="md" color="primary" variant="ghost"/>
                            </div>
                            <div>
                                <Components.Button label="Secondary" size="md" color="secondary" variant="ghost"/>
                            </div>
                            <div>
                                <Components.Button label="Danger" size="md" color="danger" variant="ghost"/>
                            </div>
                            <div>
                                <Components.Button label="Neutral" size="md" color="neutral" variant="ghost"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <Components.Title title="Campos de texto" heading="H2"/>
                    <div className="
                        flex
                        w-full 
                        rounded-2xl
                        gap-4
                        py-10
                    ">
                        <div>
                            <Components.Input size="xs" placeholder="xs"/>
                        </div>
                        <div>
                            <Components.Input size="sm" placeholder="sm"/>
                        </div>
                        <div>
                            <Components.Input size="md" placeholder="md"/>
                        </div>
                        <div>
                            <Components.Input size="lg" placeholder="lg"/>
                        </div>
                        <div>
                            <Components.Input size="xl" placeholder="xl"/>
                        </div>
                    </div>
                    <div className="
                        flex
                        w-full 
                        rounded-2xl
                        gap-4
                        py-10
                    ">
                        <div>
                            <Components.Input size="sm" placeholder="outlined" variant="outlined"/>
                        </div>
                        <div>
                            <Components.Input size="sm" placeholder="filled" variant="filled"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;