"use client";

import * as React from "react";

import { MenuSquare, X } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const Header = () => {
	const [isOpenMenuPopup, setIsOpenMenuPopup] = React.useState(false);

	const toggleMenuPopup = () => {
		setIsOpenMenuPopup(!isOpenMenuPopup);
	};

	return (
		<>
			<div className="w-full h-20 bg-[hsl(var(--background))] border-b z-10 sticky top-0 hidden lg:block">
				<div className="container mx-auto px-4 h-full">
					<div className="md:flex md:shrink-0 justify-between items-center h-full">
						<Logo />
						<div className="md:flex md:shrink-0 justify-end items-center gap-x-5">
							<Menubar>
								<MenubarMenu>
									<MenubarTrigger>Food</MenubarTrigger>
									<MenubarContent>
										<MenubarItem>
											<Link href="/foods/search">Search food</Link>
										</MenubarItem>
										<MenubarItem>
											<Link href="/foods/import">Import food</Link>
										</MenubarItem>
										<MenubarItem>
											<Link href="/products/add">Add products</Link>
										</MenubarItem>
										<MenubarItem>
											<Link href="/recipes/create">Create recipes</Link>
										</MenubarItem>
										<MenubarSeparator />
										<MenubarSub>
											<MenubarSubTrigger>Compare items</MenubarSubTrigger>
											<MenubarSubContent>
												<MenubarItem>
													<Link href="/comparisons/search">
														Search comparison
													</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/comparisons/compare">
														Search & Compare
													</Link>
												</MenubarItem>
											</MenubarSubContent>
										</MenubarSub>
										<MenubarSeparator />
										<MenubarSub>
											<MenubarSubTrigger>Stock</MenubarSubTrigger>
											<MenubarSubContent>
												<MenubarItem>
													<Link href="/stock/search">Search stock</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/stock/update">Update stock</Link>
												</MenubarItem>
											</MenubarSubContent>
										</MenubarSub>
									</MenubarContent>
								</MenubarMenu>
								<MenubarMenu>
									<MenubarTrigger>Exercises</MenubarTrigger>
									<MenubarContent>
										<MenubarItem>
											<Link href="/exercises/search">Search exercises</Link>
										</MenubarItem>
										<MenubarItem>
											<Link href="/exercises/add">Add exercise</Link>
										</MenubarItem>
										<MenubarItem>
											<Link href="/exercises/import">Import exercises</Link>
										</MenubarItem>
									</MenubarContent>
								</MenubarMenu>
								<MenubarMenu>
									<MenubarTrigger>Training</MenubarTrigger>
									<MenubarContent>
										<MenubarItem>
											<Link href="/trainings/search">Search period</Link>
										</MenubarItem>
										<MenubarItem>
											<Link href="/trainings/create">Create period</Link>
										</MenubarItem>
									</MenubarContent>
								</MenubarMenu>
								<MenubarMenu>
									<MenubarTrigger>Tools</MenubarTrigger>
									<MenubarContent>
										<MenubarSub>
											<MenubarSubTrigger>Get ready</MenubarSubTrigger>
											<MenubarSubContent>
												<MenubarItem>
													<Link href="/shoppinglist/create">
														Create shopping list
													</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/shoppinglist/food">Prepare food</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/shoppinglist/supplements">
														Prepare supplements
													</Link>
												</MenubarItem>
											</MenubarSubContent>
										</MenubarSub>
										<MenubarSeparator />
										<MenubarSub>
											<MenubarSubTrigger>Calendar</MenubarSubTrigger>
											<MenubarSubContent>
												<MenubarItem>
													<Link href="/calendar/record">
														Record daily events
													</Link>
												</MenubarItem>
											</MenubarSubContent>
										</MenubarSub>
										<MenubarSeparator />
										<MenubarSub>
											<MenubarSubTrigger>
												Track body composition
											</MenubarSubTrigger>
											<MenubarSubContent>
												<MenubarItem>
													<Link href="/trackbody/search">Search</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/trackbody/add">Add</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/trackbody/import">Import</Link>
												</MenubarItem>
											</MenubarSubContent>
										</MenubarSub>
										<MenubarSeparator />
										<MenubarSub>
											<MenubarSubTrigger>Fitness analysis</MenubarSubTrigger>
											<MenubarSubContent>
												<MenubarItem>
													<Link href="/analysis/search">Search analysis</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/analysis/create">Create analysis</Link>
												</MenubarItem>
											</MenubarSubContent>
										</MenubarSub>
										<MenubarSeparator />
										<MenubarItem>
											<Link href="/setting/table">React Pivot Table</Link>
										</MenubarItem>
									</MenubarContent>
								</MenubarMenu>
								<MenubarMenu>
									<MenubarTrigger>Admin</MenubarTrigger>
									<MenubarContent>
										<MenubarSub>
											<MenubarSubTrigger>User management</MenubarSubTrigger>
											<MenubarSubContent>
												<MenubarItem>
													<Link href="/users/search">Search user</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/users/add">Add user</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/users/import">Import users</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/users/train">Train users</Link>
												</MenubarItem>
											</MenubarSubContent>
										</MenubarSub>
										<MenubarSeparator />
										<MenubarItem>
											<Link href="/setting/profile">User profile</Link>
										</MenubarItem>
										<MenubarSeparator />
										<MenubarSub>
											<MenubarSubTrigger>Preferences</MenubarSubTrigger>
											<MenubarSubContent>
												<MenubarItem>
													<Link href="/preferences/measurement">
														System of measurement
													</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/preferences/displaymode">
														Display mode(light/dark)
													</Link>
												</MenubarItem>
												<MenubarItem>
													<Link href="/preferences/settings">
														Technical settings
													</Link>
												</MenubarItem>
											</MenubarSubContent>
										</MenubarSub>
									</MenubarContent>
								</MenubarMenu>
							</Menubar>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:hidden flex">
				<div className="grow h-14">
					<Logo />
				</div>
				<div className="flex-none w-14 h-14">
					<Button
						variant="outline"
						className="w-14 h-14"
						onClick={() => toggleMenuPopup()}
					>
						<MenuSquare className="w-full" />
					</Button>
				</div>
			</div>
			{/* Background Overlay */}
			<div
				id="menu-overlay"
				className={`fixed top-0 left-0 w-full h-full bg-[hsl(var(--foreground))] opacity-60 z-40 ${
					isOpenMenuPopup ? "" : "hidden"
				} lg:hidden`}
				onClick={() => setIsOpenMenuPopup(false)}
			></div>
			<div
				id="menu-modal"
				className={`absolute top-0 right-0 w-96 bg-[hsl(var(--background))] rounded-sm border z-50 ${
					isOpenMenuPopup ? "" : "hidden"
				} lg:hidden`}
			>
				<Button
					variant="outline"
					className="absolute top-1 right-1 flex items-center p-2 space-x-2 rounded"
					onClick={() => setIsOpenMenuPopup(false)}
				>
					<X />
				</Button>
				{/* Modal content here */}
				<div className="p-4">
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger>Food</AccordionTrigger>
							<AccordionContent>
								<ul className="p-4 w-full">
									<ModalMenuListItem
										title={"Search food"}
										href={"/foods/search"}
									/>
									<ModalMenuListItem
										title={"Import food"}
										href={"/foods/import"}
									/>
									<ModalMenuListItem
										title={"Add products"}
										href={"/products/add"}
									/>
									<ModalMenuListItem
										title={"Create recipes"}
										href={"/recipes/create"}
									/>
									<li>
										<Separator />
									</li>
									<li className="pt-2">
										<Label className="p-3 text-base font-semibold">
											Compare items
										</Label>
									</li>
									<ModalMenuListItem
										title={"Search comparison"}
										href={"/comparisons/search"}
									/>
									<ModalMenuListItem
										title={"Search & Compare"}
										href={"/comparisons/compare"}
									/>
									<li>
										<Separator />
									</li>
									<li className="pt-2">
										<Label className="p-3 text-base font-semibold">Stock</Label>
									</li>
									<ModalMenuListItem
										title={"Search stock"}
										href={"/stock/search"}
									/>
									<ModalMenuListItem
										title={"Update stock"}
										href={"/stock/update"}
									/>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Exercises</AccordionTrigger>
							<AccordionContent>
								<ul className="p-4 w-full">
									<ModalMenuListItem
										title={"Search exercises"}
										href={"/exercises/search"}
									/>
									<ModalMenuListItem
										title={"Add exercise"}
										href={"/exercises/add"}
									/>
									<ModalMenuListItem
										title={"Import exercises"}
										href={"/exercises/import"}
									/>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>Training</AccordionTrigger>
							<AccordionContent>
								<ul className="p-4 w-full">
									<ModalMenuListItem
										title={"Search period"}
										href={"/trainings/search"}
									/>
									<ModalMenuListItem
										title={"Create period"}
										href={"/trainings/create"}
									/>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>Tools</AccordionTrigger>
							<AccordionContent>
								<ul className="p-4 w-full">
									<li>
										<Label className="p-3 text-base font-semibold">
											Get ready
										</Label>
									</li>
									<ModalMenuListItem
										title={"Create shopping list"}
										href={"/shoppinglist/search"}
									/>
									<ModalMenuListItem
										title={"Prepare food"}
										href={"/shoppinglist/food"}
									/>
									<ModalMenuListItem
										title={"Prepare supplements"}
										href={"/shoppinglist/supplements"}
									/>
									<li>
										<Separator />
									</li>
									<li className="pt-2">
										<Label className="p-3 text-base font-semibold">
											Calendar
										</Label>
									</li>
									<ModalMenuListItem
										title={"Record daily events"}
										href={"/calendar/record"}
									/>
									<li>
										<Separator />
									</li>
									<li className="pt-2">
										<Label className="p-3 text-base font-semibold">
											Track body composition
										</Label>
									</li>
									<ModalMenuListItem
										title={"Search"}
										href={"/trackbody/search"}
									/>
									<ModalMenuListItem title={"Add"} href={"/trackbody/add"} />
									<ModalMenuListItem
										title={"Import"}
										href={"/trackbody/import"}
									/>
									<li>
										<Separator />
									</li>
									<li className="pt-2">
										<Label className="p-3 text-base font-semibold">
											Fitness analysis
										</Label>
									</li>
									<ModalMenuListItem
										title={"Search analysis"}
										href={"/analysis/search"}
									/>
									<ModalMenuListItem
										title={"Create analysis"}
										href={"/analysis/create"}
									/>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger>Admin</AccordionTrigger>
							<AccordionContent>
								<ul className="p-4 w-full">
									<li>
										<Label className="p-3 text-base font-semibold">
											User management
										</Label>
									</li>
									<ModalMenuListItem
										title={"Search user"}
										href={"/users/search"}
									/>
									<ModalMenuListItem title={"Add user"} href={"/users/add"} />
									<ModalMenuListItem
										title={"Import users"}
										href={"/users/import"}
									/>
									<ModalMenuListItem
										title={"Train users"}
										href={"/users/train"}
									/>
									<li>
										<Separator />
									</li>
									<ModalMenuListItem
										title={"User profile"}
										href={"/setting/profile"}
									/>
									<li>
										<Separator />
									</li>
									<li className="pt-2">
										<Label className="p-3 text-base font-semibold">
											Preferences
										</Label>
									</li>
									<ModalMenuListItem
										title={"System of measurement"}
										href={"/preferences/measurement"}
									/>
									<ModalMenuListItem
										title={"Display mode(light/dark)"}
										href={"/preferences/displaymode"}
									/>
									<ModalMenuListItem
										title={"Technical settings"}
										href={"/preferences/settings"}
									/>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 text-base leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-normal leading-none">{title}</div>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

const ModalMenuListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<a
				ref={ref}
				className={cn(
					"block select-none space-y-1 rounded-md p-3 text-base leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
					className,
				)}
				{...props}
			>
				<div className="text-sm font-normal leading-none">{title}</div>
			</a>
		</li>
	);
});
ModalMenuListItem.displayName = "ModalMenuListItem";

export default Header;
