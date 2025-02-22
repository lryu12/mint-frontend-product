import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function AppHeader() {
    return (
        <header className="flex justify-between items-center p-2 border-b h-16">
            {/* logo */}
            <div className="flex items-center">
                <img src="https://ubcmint.github.io/img/main-page/mint-logo.png" alt="Logo" className="h-14" />
            </div>

            {/* update, issues */}
            <div className="flex items-center space-x-4">
                <Button variant="link" className="flex items-center space-x-1 px-3 py-2">
                    <span>Update</span>
                    <ExternalLinkIcon className="h-4 w-4" />
                </Button>
                <Button variant="link" className="flex items-center space-x-1 px-3 py-2">
                    <span>Issues</span>
                    <ExternalLinkIcon className="h-4 w-4" />
                </Button>

                {/* help */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center space-x-1 px-3 py-2">
                            <span className="text-sm font-medium leading-none">Help</span>
                            <ChevronUpIcon className="h-4 w-4" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mx-4">
                        <DropdownMenuItem>Getting Started</DropdownMenuItem>
                        <DropdownMenuItem>Testing Impendance</DropdownMenuItem>
                        <DropdownMenuItem>Troubleshooting Guide</DropdownMenuItem>
                        <DropdownMenuItem>Cyton Driver Fix</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>

        </header>
    );
}